/* eslint-disable @typescript-eslint/no-empty-function */

/**
 * Added because jsdom was complaining about `HTMLCanvasElement.prototype.getContext` usage.
 * Code line: https://github.com/salesforce/design-system-react/blob/826f395067d9f2b25c51ec36033df5c48c66e50d/components/utilities/truncate/index.jsx#L21
 * Proposed solutions: https://github.com/jsdom/jsdom/issues/1782
 */
window.HTMLCanvasElement.prototype.getContext = function getContext() {
  return {
    fillRect() {},
    clearRect() {},
    getImageData(x, y, w, h) {
      return {
        data: new Array(w * h * 4),
      };
    },
    putImageData() {},
    createImageData() { return []; },
    setTransform() {},
    drawImage() {},
    save() {},
    fillText() {},
    restore() {},
    beginPath() {},
    moveTo() {},
    lineTo() {},
    closePath() {},
    stroke() {},
    translate() {},
    scale() {},
    rotate() {},
    arc() {},
    fill() {},
    measureText() {
      return { width: 0 };
    },
    transform() {},
    rect() {},
    clip() {},
  };
};

window.HTMLCanvasElement.prototype.toDataURL = function toDataURL() {
  return '';
};
