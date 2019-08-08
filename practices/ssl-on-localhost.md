# Running ssl at https://localhost:3000

So, you want to use ssl in development mode huh?  Good for you jack.  It's like a secret party on your machine.

The benefits of this mostly encompass mimicking prodcution as closeley as possible. You can enforce the content security policy locally, which is great for tesiting front end changes.

Steps:

### 1. Generate an ssl certificate for localhost
Make a directlryo in your config folder called ssl, and cd in to it:
```
mkdir -p config/ssl
cd config/ssl

```

Then generate the certificates. This command generates an ssl that covers all domains accessed on https://localhost
```
openssl req -x509 -out localhost.crt -keyout localhost.key \
  -newkey rsa:2048 -nodes -sha256 \
  -subj '/CN=localhost' -extensions EXT -config <( \
   printf "[dn]\nCN=localhost\n[req]\ndistinguished_name = dn\n[EXT]\nsubjectAltName=DNS:localhost\nkeyUsage=digitalSignature\nextendedKeyUsage=serverAuth")
```


### 2. Update the .gitignore file to ignore this folder
`/config/ssl/*`

### 3 Tell your computer to trust the new certificate:
trust the cert:
```
cd config/ssl
sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain config/ssl/localhost.crt
```

### 3. Instruct puma to do your bidding
In config/puma.rb, replace this line:
`port        ENV.fetch("PORT") { 3000 }`

with

```
if ENV['SSL']
  ssl_bind '127.0.0.1', '3000', {
    key: 'config/ssl/localhost.key',
    cert: 'config/ssl/localhost.crt'
  }
else
  port        ENV.fetch("PORT") { 3000 }
end
```

### 4. Run your content security policy in development
In your content_security_policy.rb file, you do this:
`unless Rails.env.test? || (Rails.env.development? && ENV['SSL'].blank?)` or what ever suits your environment.


### 5. Webpack, join the secret party
If you're using the `webpack-dev-server` in development, you can serve your packs over HTTPS
by setting the `https` option for `webpack-dev-server` to `true` in `config/webpacker.yml`,
then start the dev server as usual with `./bin/webpack-dev-server`.

Please note that the `webpack-dev-server` will use its own self-signed certificate (not the ones you provisioned above),
so your web browser will display a warning/exception upon accessing the page. If you get
`https://localhost:3035/packs net::ERR_INSECURE_RESPONSE`
in your console, simply open the link in your browser and accept the SSL exception.
Now if you refresh your rails view everything should work as expected.


### 6. Get the secret party started
Now, you can run your rails server with ssl:
`ENV['SSL'] = true`

You can still run it normally too, without ssl, but why would you?:  `rails s`

Note that webpack will always run over https now, but that's fine.

### 7. Maybe imgaes don't load?
If you are setting a global `HOST` variable in developement.rb, you might need to conditinally make it https if the ssl env is present:
`HOST = "http#{ENV['SSL'] ? 's' : ''}://localhost:3000"`
