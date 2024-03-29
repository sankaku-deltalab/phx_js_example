import {HookBaseClass} from "../hook-base";

export class ClientSider extends HookBaseClass {
  tickId: number | undefined;

  mounted() {
    console.log("ClientSider mounted");
    this.pushEvent("client_sider_mounted", {id: this.el.id})

    this.tickId = setInterval(() => {
      console.log("ClientSider still alive");
      this.pushEvent("client_sider_still_alive", {id: this.el.id})
    }, 1000)
  }

  destroyed() {
    console.log("ClientSider destroyed");
    this.pushEvent("client_sider_destroyed", {id: this.el.id})
    clearInterval(this.tickId)
  }
}