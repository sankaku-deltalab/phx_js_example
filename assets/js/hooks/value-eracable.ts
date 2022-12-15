import {HookBaseClass} from "../hook-base";

export class ValueEracable extends HookBaseClass<HTMLInputElement> {
  mounted() {
    this.handleEvent<{id_for_filter: string}>("erace_value", ({id_for_filter}) => {
      console.log("erace_value")
      if (this.el.id !== id_for_filter) return;
      this.el.value = "";
    })
  }
}