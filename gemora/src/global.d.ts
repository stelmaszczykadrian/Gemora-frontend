declare module '*.svg' {
    import React = require("react");
    export const ReactComponent:React.FC<React.SVGProps<SVGElement>>
    const content: any;
    export default content;
}

declare module '*.jpg' {
    const value: any;
    export default value;
}