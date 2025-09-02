import { Component } from "@angular/core";
import { NgtCanvas } from "angular-three";

import { SceneGraphComponent } from "./scene-graph/scene-graph.component";

@Component({
  selector: "app-root",
  imports: [NgtCanvas],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "angular-three-scene-shapes";
  protected sceneGraph = SceneGraphComponent;
}
