# Lookup hostname

```bash
npm i -g lookup-hostname
```

```bash
$ lookup google.com
176.22.242.118
```

This is just a CLI wrapper of
https://nodejs.org/api/dns.html#dns_dns_lookup_hostname_options_callback. It's
handy because it resolves hostnames the same way your OS does, taking things
like `/etc/hosts` into account.
