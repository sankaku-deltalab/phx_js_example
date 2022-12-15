import {LiveSocket} from "phoenix_live_view"

export interface HookBase<El extends HTMLElement> {
  readonly el: El;
  readonly liveSocket: LiveSocket;
  readonly pushEvent: <Payload extends Record<string, unknown>>(event: string, payload: Payload, callback?: (reply: unknown, ref: unknown) => void) => void;
  readonly pushEventTo: <Payload extends Record<string, unknown>>(selectorOrTarget: unknown, event: string, payload: Payload, callback?: (reply: unknown, ref: unknown) => void) => void;
  readonly handleEvent: <Payload extends Record<string, unknown>>(event: string, callback: (payload: Payload) => void) => void;
  readonly upload: (name: string, files: unknown) => void;
  readonly uploadTo: (selectorOrTarget: unknown, name: string, files: unknown) => void;

  mounted(): void;
  beforeUpdate(): void;
  updated(): void;
  destroyed(): void;
  disconnected(): void;
  recconected(): void;
}

export abstract class HookBaseClass<El extends HTMLElement = HTMLElement> implements HookBase<El> {
  readonly el!: El;
  readonly liveSocket!: LiveSocket;
  readonly pushEvent!: <Payload extends Record<string, unknown>>(event: string, payload: Payload, callback?: (reply: unknown, ref: unknown) => void) => void;
  readonly pushEventTo!: <Payload extends Record<string, unknown>>(selectorOrTarget: unknown, event: string, payload: Payload, callback?: (reply: unknown, ref: unknown) => void) => void;
  readonly handleEvent!: <Payload extends Record<string, unknown>>(event: string, callback: (payload: Payload) => void) => void;
  readonly upload!: (name: string, files: unknown) => void;
  readonly uploadTo!: (selectorOrTarget: unknown, name: string, files: unknown) => void;

  mounted(): void {}
  beforeUpdate(): void {}
  updated(): void {}
  destroyed(): void {}
  disconnected(): void {}
  recconected(): void {}

  static asHook(): Object {
    const obj = this.prototype;
    const names = Object.getOwnPropertyNames(obj);
    const entiries = names.map(n => [n, obj[n]])
    return Object.fromEntries(entiries)
  }
}
