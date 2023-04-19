import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import styles from './HelloDevOpsWebPart.module.scss';

export interface IHelloDevOpsWebPartProps {
}

export default class HelloDevOpsWebPart extends BaseClientSideWebPart<IHelloDevOpsWebPartProps> {
  public render(): void {
    this.domElement.innerHTML = `<div class="${ styles.helloDevOps }"></div>`;
  }

  protected onInit(): Promise<void> {
    return super.onInit();
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }
}
