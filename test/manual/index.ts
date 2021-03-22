// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Activator, MarkerArea, Style } from '../../src';
import { DisplayMode } from '../../src/core/Settings';
import { MarkerAreaState } from '../../src/MarkerAreaState';

export * from './../../src/index';

export class Experiments {
  private markerArea1: MarkerArea;
  private displayMode: DisplayMode = 'inline';
  private currentState: MarkerAreaState;

  private oddLaunch = true;

  constructor() {
    this.renderResult = this.renderResult.bind(this);
    // const demoJson = '{ "width":635,"height":846,"markers":\
    //                           [{"color":"#EF4444","fontFamily":"Helvetica, Arial, sans-serif","padding":5,\
    //                           "text":"mmx","strokeColor":"#EF4444","strokeWidth":3,"strokeDasharray":"",\
    //                           "opacity":1,"left":90.25949096679688,"top":75.19173431396484,\
    //                           "width":204.74578857421875,"height":66.7796401977539,\
    //                           "rotationAngle":0,"visualTransformMatrix":{"a":1,"b":0,"c":0,"d":1,"e":90.25949096679688,"f":75.19173431396484},"containerTransformMatrix":{"a":1,"b":0,"c":0,"d":1,"e":0,"f":0},"typeName":"AITextMarker","state":"select"}]}'
    // //Activator.addKey('1234');
    // this.currentState = JSON.parse(demoJson);
  }

  public openMarkerArea(target: HTMLImageElement): void {
    this.markerArea1 = new MarkerArea(target);
    Style.styleSheetRoot = document.head;
    this.markerArea1.addRenderEventListener(this.renderResult);
    this.markerArea1.settings.displayMode = this.displayMode;
    this.markerArea1.settings.popupMargin = 10;

    // this.markerArea1.settings.newFreehandMarkerOnPointerUp = true;

    // this.markerArea1.uiStyleSettings.toolbarHeight = 40;
    // if (this.oddLaunch) {
    //   this.markerArea1.uiStyleSettings.toolbarColor = 'blue';
    // }
    // this.oddLaunch = !this.oddLaunch;

    // this.markerArea1.uiStyleSettings.toolbarStyleColorsClassName = 'toolbar';
    // this.markerArea1.uiStyleSettings.toolbarButtonStyleColorsClassName = 'toolbar-button';
    // this.markerArea1.uiStyleSettings.toolbarActiveButtonStyleColorsClassName = 'toolbar-active-button';

    // this.markerArea1.uiStyleSettings.toolboxButtonRowStyleColorsClassName = 'toolbox';
    // this.markerArea1.uiStyleSettings.toolboxButtonStyleColorsClassName = 'toolbox-button';
    // this.markerArea1.uiStyleSettings.toolboxActiveButtonStyleColorsClassName = 'toolbox-active-button';
    // this.markerArea1.uiStyleSettings.toolboxPanelRowStyleColorsClassName = 'toolbox-panel-row';

    // this.markerArea1.availableMarkerTypes = ['CalloutMarker', ...this.markerArea1.BASIC_MARKER_TYPES];
    this.markerArea1.availableMarkerTypes = ['CalloutMarker', 'AITextMarker'];
    // this.markerArea1.availableMarkerTypes = this.markerArea1.ALL_MARKER_TYPES;

    this.markerArea1.renderWidth = 1000;
    this.markerArea1.renderHeight = 400;
    this.markerArea1.renderAtNaturalSize = true;
    // this.markerArea1.renderImageType = 'image/jpeg';
    // this.markerArea1.renderImageQuality = 0.2;
    // this.markerArea1.renderMarkersOnly = true;

    this.markerArea1.show();
    if (this.currentState) {
      this.markerArea1.restoreState(this.currentState);
    }
  }

  private renderResult(dataUrl: string, state: MarkerAreaState) {
    (document.getElementById('resultImage1') as HTMLImageElement).src = dataUrl;
    this.currentState = JSON.parse(JSON.stringify(state));
    console.log('currentState:', JSON.stringify(state));
  }

  public async render(resultTarget: HTMLImageElement): Promise<void> {
    resultTarget.src = await this.markerArea1.render();
    this.markerArea1.close();
  }

  public setDisplayMode(mode: DisplayMode): void {
    this.displayMode = mode;
  }

  public closeMarkerArea(): void {
    if (this.markerArea1) {
      this.markerArea1.close();
    }
  }

}

// export class ComponentImage extends HTMLElement {
//   connectedCallback(): void {
//     const img = document.createElement('img');
//     img.src = 'images/landscape.jpg';
//     this.appendChild(img);
//   }
// }

