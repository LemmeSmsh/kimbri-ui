interface IComponent {
  name: string;
  classPrefix: string;
}

interface IComponentChildren {

}

export default class ComponentSetup {
  private workspace: string;
    
  constructor(workspaceName: string) {
    this.workspace = workspaceName;
    this.components = [];
  }

  getWorkspace() {
    return this.workspace;
  }


};