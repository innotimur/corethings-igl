declare module '*.css' {
    interface Style {
        [key: string]: string;
    }

    const style: Style;

    export default style;
}

declare module '*.png' {
    const value: string;

    export default value;
}

declare module '*.svg' {
    const value: string;

    export default value;
}

declare module '*.json' {
    const value: any;

    export default value;
}