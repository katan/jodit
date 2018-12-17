/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * License GNU General Public License version 2 or later;
 * Copyright 2013-2018 Valeriy Chupurnov https://xdsoft.net
 */

export const appendScript = (
    url: string,
    callback: (this: HTMLElement, e: Event) => any,
    className: string = '',
    doc: Document
) => {
    const script: HTMLScriptElement = doc.createElement('script');
    script.className = className;
    script.type = 'text/javascript';

    if (callback !== undefined) {
        script.addEventListener('load', callback, false);
    }

    script.src = formatUrl(url);

    doc.body.appendChild(script);
};