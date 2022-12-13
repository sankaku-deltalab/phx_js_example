defmodule PhxJsExampleWeb.PageController do
  use PhxJsExampleWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
