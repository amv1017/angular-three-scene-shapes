import { Component } from "@angular/core";
import { NgtCanvas, extend } from "angular-three";
import * as THREE from "three";
import { SceneGraphComponent } from "./scene-graph/scene-graph.component";

extend(THREE);

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
