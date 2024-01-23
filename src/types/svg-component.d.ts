
declare module '~virtual/svg-component' {
  const SvgIcon: import("vue").DefineComponent<{
      name: {
          type: import("vue").PropType<"cart" | "home" | "search" | "user">;
          default: string;
          required: true;
      };
  }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
      name: {
          type: import("vue").PropType<"cart" | "home" | "search" | "user">;
          default: string;
          required: true;
      };
  }>>, {
      name: "cart" | "home" | "search" | "user";
  }>;
  export const svgNames: ["cart" , "home" , "search" , "user"];
  export type SvgName = "cart" | "home" | "search" | "user";
  export default SvgIcon;
}
