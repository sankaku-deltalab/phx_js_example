import { ClientSider } from "./client-sider";
import { ValueEracable } from "./value-eracable";

export const Hooks = {
  ClientSider: ClientSider.asHook(),
  ValueEracable: ValueEracable.asHook(),
}


// export const Hooks = {}
// Hooks.ClientSider = {
//   mounted() {
//     console.log("ClientSider mounted");
//     this.pushEvent("client_sider_mounted", {id: this.el.id})

//     this.tickId = setInterval(() => {
//       console.log("ClientSider still alive");
//       this.pushEvent("client_sider_still_alive", {id: this.el.id})
//     }, 1000)
//   },

//   destroyed() {
//     console.log("ClientSider destroyed");
//     this.pushEvent("client_sider_destroyed", {id: this.el.id})
//     clearInterval(this.tickId)
//   }
// }

// Hooks.ValueEracable = {
//   mounted() {
//     this.handleEvent("erace_value", ({id_for_filter}) => {
//       if (this.el.id !== id_for_filter) return;
//       this.el.value = "";
//     })
//   }
// }
