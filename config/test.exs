import Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :phx_js_example, PhxJsExampleWeb.Endpoint,
  http: [ip: {127, 0, 0, 1}, port: 4002],
  secret_key_base: "tTzkkuSQda/WS8P26E2JE9q5x8KCyUYPAlbUfrDJcPdL4jakgmyQnrK2u84yHbw3",
  server: false

# In test we don't send emails.
config :phx_js_example, PhxJsExample.Mailer,
  adapter: Swoosh.Adapters.Test

# Print only warnings and errors during test
config :logger, level: :warn

# Initialize plugs at runtime for faster test compilation
config :phoenix, :plug_init_mode, :runtime
