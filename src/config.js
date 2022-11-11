export default{
    port: process.env.PORT || 8080,
    fileSystem:{
        path: './DB'
    },
    mongodb:{
        connection: process.env.DB_URL_MONGO || 'mongodb://localhost/ecommerce'
    },
    firebase: {
        "type": "service_account",
        "project_id": "ecommerce-87cb9",
        "private_key_id": "24fc3bf957361a8c532ba1543dab9d66e80fa04f",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQC8aY5nHzG+Q2E7\nuUTnK+ySVc2RGp+hAuhzcd5Is0Vqh8oo6o8u+rvfufvDO241CHNsIuVzd2JrgCAh\nGJYGqFIBTau0QahmJlJoA4BnHmwgqOnZtW5GSpKouORM9exGWYm7BSFLVkS4hXy+\nQmI3APvE5q2rZikbjq5gpMZXgQWUQuVuTSzsGLyNkoNvJHZ2LqtAQdtGT5++6d1W\n6720qmkZMB64gnZOLrHkianX+OGC6nsLOFTnvh5yRINILtCY+7tIQhqSS7VoEBAd\n4FeV3mkcY5+SVLDEfmx40+1qDra+ia64iZjbyMmToXLkWttjcMB3FwXx4a1f2mVb\nvzCkIwp5AgMBAAECggEABR0Fw/tzH4dnXAY2DiKRafLJcJDVCHsCWUC7wEQaRA8B\nn+zmvCcKooKjCCxEnEyZilOjn8e7jHCWnqNSzgUzLY0gtfSKuBP97Ev9B/9pvpSq\n/RE5GBAFzS2wZ3zMn+el7uUPn2Js3MelqCm3zeeZTaGXkMVl4/UyOxX5uo36O2jt\n4U9D+1qF/SGibSq+/3yacgZiFi6Dpcn4AgwVKSEg/ntJcwWHqoYR34RT2Xd/NC6I\n3r3BgdEGQ8UmyeXprzyLyWlgPkuOc2b1iZKdLw3kzCXSYiLWgsP+x6ZPU2LYK5U0\nLTQEfOwMgJlXExhCr8A0peGKeUhAvFp6mjD2hRS0sQKBgQD0RtcVNYrJtLkKuk6T\naDkbrPBG8eETuc8oLp4Owu6OONpWUxga4k5SrILiadCUAVP2awG/cLfnQpF9x7FE\noDjjacXBbxSMMlLBsYiIHktzPb9kSvXYhjLMAWOdZftfUe7EWBPklc9wVvvck60Z\nLGukWawbpv8viZmdJgGWpg33CQKBgQDFdF8lyIJZTc/frpFQ29ION3YMyoNVaIa0\nE13KsUhnezyfa9dk5SifU+uYYFgZcwQ9hR40qSA4L/sx012sDAPFXKwTO/bqB60o\novqq+Wgyuo0ys/PvvkR+5EYgT3ibbJ+OU/tVwUzJI+nNvPT21pVclW3i/tadV7TZ\n45UXJw1j8QKBgQCTDbZbaUEkzmv6/k9hRAPlGkYHn4Ms2dXQzcePAWCVM7qU7y76\nuDQIZxvf622KPAZsuNxzgArl6FgnzTh1JLM6jCllmlZXU9AoFJUpxHsNZCW83beE\nYr1fvJJYZdVe+7buckt/d4RKj8LNdgVluy0N4oHOn8jNuFtGlGOuakbL6QKBgQCh\nhefLtbGDslaJKXlwRtIXlSD5p7Q16tK+flUsWUfcdwCJfSNvQtKvO2wvcyi+cMsY\nNEwYUf2sWPvIr5oiApYXHg8ZkOUUXwE0i9Y4hNvLG7Yjsveqt9+6WaxQBBKqOfpv\n6J1ickUJCVraVWeigLkgSpDgrw0LG1MzJquwi961UQKBgQC6lUAkup8ZbfX7bt5F\n5xx8nW9PTVFIBp4kdEK7YvzkfdRj3WfRb83I2T5SIpiRrgrqGOjVKX5Ge9a2Wdqa\nNqpLYUHPiqNq6d5IWC7HCbBIZiJgSgpUq9lT6hq4Wh6Dd8OzRP6bN1pVi5YvDKAh\nuCWfpvtFfG1gDGx6gYB4ARs3Mg==\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-jem7t@ecommerce-87cb9.iam.gserviceaccount.com",
        "client_id": "117374427020363694181",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-jem7t%40ecommerce-87cb9.iam.gserviceaccount.com"
      }
}