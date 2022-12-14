defmodule PhxJsExampleWeb.PushingLive.Index do
  use PhxJsExampleWeb, :live_view
  use Phoenix.HTML
  import Phoenix.LiveView

  @impl true
  def mount(_params, _session, socket) do
    socket = socket |> assign(show_client_sider: false)
    {:ok, socket}
  end

  @impl true
  def handle_params(_params, _url, socket) do
    {:noreply, socket}
  end

  @impl true
  def handle_event("send_message_to_client", %{"message" => message}, socket)
      when message |> is_bitstring() do
    socket =
      socket
      |> push_event("message_sended", %{message: message})

    {:noreply, socket}
  end

  @impl true
  def handle_event("validate", params, socket) do
    IO.inspect(%{event: "validate", params: params})
    IO.inspect(socket.assigns)
    {:noreply, socket}
  end

  @impl true
  def handle_event("toggle_client_sider", _params, socket) do
    socket = socket |> update(:show_client_sider, &(not &1))
    {:noreply, socket}
  end

  @impl true
  def handle_event(event, params, socket) do
    IO.inspect(%{event: event, params: params})
    IO.inspect(socket.assigns)
    {:noreply, socket}
  end
end
