import React from 'react';
// import ReactDOM from 'react-dom';
// import { Widget } from '@phosphor/widgets';
// import { HoverBox } from "@jupyterlab/apputils";
/**
 * A React component for the rich text menu's individual items/marks.
 */
export default class MenuItem extends React.Component<{format: string, active: boolean, cancelled: boolean, tooltip: string, handleClick: (e: React.SyntheticEvent) => void}> {

    constructor(props: any) {
        super(props);
        // this.getFormatMark = this.getFormatMark.bind(this);
        this.getClassName = this.getClassName.bind(this);
        this.getImgSrc = this.getImgSrc.bind(this);
    }

    // componentDidMount() {
    //     if (this.props.menuWidget) { // If it needs to render a menu widget, set geometry for hoverbox. 
    //         let thisNode = (ReactDOM.findDOMNode(this.refs[this.props.format]) as HTMLElement);
    //         this.setGeometry = this.setGeometry.bind(this);
    //         this.setGeometry(thisNode);
    //     }
    // }

    /**
     * 
    //  */
    // setGeometry(componentNode: HTMLElement) {
    //     let widget = this.props.menuWidget;
    //     console.log("setting geometry");
    //     const style = window.getComputedStyle(widget.node);
    //     let rect = componentNode.getBoundingClientRect();
    //     console.log(rect);
    //     console.log(componentNode);
    //     HoverBox.setGeometry({
    //         anchor: rect,
    //         host: componentNode,
    //         minHeight: 50,
    //         maxHeight: 200,
    //         node:  widget.node,
    //         privilege: "below",
    //         style
    //     });

    //     // if (widget.isAttached) {
    //     //     Widget.detach(widget);
    //     // }
    //     // else {
    //     //     Widget.attach(widget, document.body);
    //     // }

    // }
    /**
     * Gets the icon to be loaded based on the 'format' prop.
     * @returns - Hardcoded 'require' statements because 'require'
     * doesn't allow variables.
     */
    getImgSrc() {
        switch (this.props.format) {
            case "strong":
                return require("../static/scribe-format-bold.png");
            case "em":
                return require("../static/scribe-format-italic.png");
            case "underline":
                return require("../static/scribe-format-underline.png");
            case "code":
                return require("../static/scribe-format-code.png");
            case "strikethrough":
                return require("../static/scribe-format-strikethrough.png");
            case "heading":
                return require("../static/scribe-format-text-style.png");
            case "bullet_list":
                return require("../static/scribe-format-list-bulleted.png");
            case "ordered_list":
                return require("../static/scribe-format-list-numbered.png");
            case "blockquote":
                return require("../static/scribe-format-blockquote.png");
            case "link":
                return require("../static/scribe-format-link.png");
            case "image":
                return require("../static/scribe-format-photo.png");
            case "stick":
                return require("../static/scribe-stick.png");
            default:
                break;
        }
    }

    // /**
    //  * Gets the name of the format in ProseMirror language.
    //  */
    // getFormatMark() {
    //     switch (this.props.format) {
    //         case "format_bold":
    //             return "strong";
    //         case "format_italic":
    //             return "em";
    //         case "format_underline":
    //             return "underline";
    //         case "code":
    //             return "code";
    //         case "strikethrough_s":
    //             return "strikethrough";
    //         case "format_quote":
    //             return "blockquote";
    //         case "insert_link":
    //             return "link";
    //         case "photo":
    //             return "image";
    //         case "format_list_bulleted":
    //             return "bullet_list";
    //         case "format_list_numbered":
    //             return "ordered_list";
    //         case "text_fields":
    //             return "heading";
    //         default:
    //             break;
    //     }
    // }

    getClassName() {
        let format = this.props.format;
        let active = this.props.active;

        let str = "";

        if (format === "stick") {
            return "menuSeparator";
        }

        if (format === "insert_link" || format === "photo") {
            str += " menuItem";
        }
        else if (active) {
            str += " activeMenuItem";
        }
        else {
            str += " menuItem";
        }

        return str;
    }
    /**
     * Renders the menu item component.
     */
    render() {
        if (this.props.cancelled) {
            return (
                <img 
                // src={this.getImgSrc()} 
                // alt="formatting" 
                id={this.props.format} 
                src={this.getImgSrc()}
                style={{height: "24px", width: "24px"}}
                className="inactive-menu-icon"
                title={this.props.tooltip}
                />            
            )
        }
        else {
            return (
                <img 
                // src={this.getImgSrc()} 
                // alt="formatting" 
                id={this.props.format} 
                className={this.getClassName()}
                src={this.getImgSrc()}
                title={this.props.tooltip}
                style={{height: "24px", width: "24px"}}
                onClick={this.props.format !== "stick" ? this.props.handleClick : () => null} />
            )
        }

    }

}