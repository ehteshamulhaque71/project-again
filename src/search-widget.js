import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/simple-icon/simple-icon.js"
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js"


export class SearchWidget extends LitElement {
    static get properties() {
        return {
            value: { type: String },
        }
    }

    static get styles() {
        return css`
        :host {
            display: block;
        }
        simple-icon {
            display: inline-block;
            --simple-icon-height: 40px;
            --simple-icon-width: 40px;
        }

        .input-container {
            display: flex;
            align-items: center;
        }

        .input-container input[type="text"] {
            padding: 20px;
            border: none;
            background-color: #fff;
            font-size: 16px;
            width: 60%;
            margin: 0 10px 0 0;
        }

        .input-container button {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            border: none;
            cursor: pointer;
            font-size: 16px;
        }
        #search-input {
            margin-right: 10px;
            width: calc(100% - 120px);
        }

        #search-button {
            margin-left: 10px;
        }
        `;
    }

    constructor() {
        super();
        this.value = 'Default Value';
    }

    render() {
        return html`
        <div class="input-container">
            <simple-icon icon="icons:search"></simple-icon>
            <input type="text" value="${this.value}" @input="${this._handleInput}" placeholder="Search Content, Topics, and People"/>
            <!-- <input type="text" id="search-input" > -->
            <button id="search-button">Search</button>
        </div>
        `;
    }

    _handleInput(e) {
        this.value = e.target.value;
        console.log(this.value);
        this.dispatchEvent(new CustomEvent('value-changed', {
            detail: {
                value: this.value,
            }
        }));
    }
}

customElements.define('search-widget', SearchWidget);