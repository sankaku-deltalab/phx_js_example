defmodule PhxJsExampleWeb.PushingLive.Index do
  use PhxJsExampleWeb, :live_view
  use Phoenix.HTML

  @impl true
  def mount(_params, _session, socket) do
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
  def handle_event(_event, _params, socket) do
    {:noreply, socket}
  end
end
