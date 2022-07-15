export default {
  port: 3000,
  host: "localhost",
  dbUri: "mongodb://localhost:27017/E-commerce",
  logLevel: "info",
  saltWorkFactor: 10,
  expiresIn: 300000,
  // accessTokenTtl: "15m",
  accessTokenTtl: "10h",
  refreshTokenTtl: "1y",
  stripeKey:
    "sk_test_51L30i1LR0al1hMqvsS3gVv3yRVsPHJ4iMbrHFp0orPf9xioWGkvmjoovMox6iNaKNXJuSnBVQfsr1T5BLRj9T6a200Lx0uVGZd",
  publicKey: `-----BEGIN PUBLIC KEY-----
  MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDM17hegfcmQkL+EU9WYQ/wXHDV
  a8nwG7xZB6hlfVwAHqJIF6bdgurQ+vUG5okkBvdN2OqYI7I/vn+PUzsBnQgsepFE
  lHy5PK2RJW/JBk/o51wL3d7+BCPsbiWflUCtwqF9XU69guIIxITa6LdvQsrSLmHX
  p4aaVcsrv7qGvPvzRQIDAQAB
  -----END PUBLIC KEY-----`,
  privateKey: `-----BEGIN RSA PRIVATE KEY-----
  MIICXQIBAAKBgQDM17hegfcmQkL+EU9WYQ/wXHDVa8nwG7xZB6hlfVwAHqJIF6bd
  gurQ+vUG5okkBvdN2OqYI7I/vn+PUzsBnQgsepFElHy5PK2RJW/JBk/o51wL3d7+
  BCPsbiWflUCtwqF9XU69guIIxITa6LdvQsrSLmHXp4aaVcsrv7qGvPvzRQIDAQAB
  AoGAYX83gLwJP4uASV9BzNJL/NJy3hH8vqzk29c6PnwJQwFRqlCfmoUKcMdRwqQN
  mDk8ki/xkNJEr/Ri0HwD9MOiNHdt42ViK+wjV1xHj843tiDyx9hdEHfkFAUazV4G
  k2fV8SSuYnJ2uvLjal6na6q/N/qDH+9dzfXwl97myCtIHEECQQDnPhXlHIEmtpHB
  W91Kr0v7WOZGALVRMQ3E1UJQL7Ki0cJpBNpS1EbEhbtyNOVxm3GWfzkx4vFeWruZ
  gynN6YPRAkEA4sYQoQA0B22ZxGMiQO3QJxIFAqh6//mPJphDAC1wbmo6Bp5gjOfr
  mJX06MLHpaXle5Y1W2dcWTAY1M5UY9BZNQJBAILtAhSQiQdUQz5JNwf8LHcJJIfq
  Cr8HmRYi8MLZ3riVLw+q8boH+nF2jmThUi96pVtieQ2nwqV7ldAbFWZCmqECQDOu
  oCuROEpZGCpBzZSunjnJSYsJir67yXwqR1rLAEypuP+5KJf0YyUrR92kRovh+yLn
  YNGsBMfuxjn5rBHzceECQQDBLUxqpL5VYXm3mSVKex+qHaRAJaR5bpewk64vu1Mt
  AD89aAYcxMQobdzexTFcFplP7+Pnz732Rzzw309Thesb
  -----END RSA PRIVATE KEY-----`,
};
