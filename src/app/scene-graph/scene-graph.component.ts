import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ChangeDetectionStrategy,
} from "@angular/core";

@Component({
  selector: "app-scene-graph",
  imports: [],
  templateUrl: "./scene-graph.component.html",
  styleUrl: "./scene-graph.component.scss",
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SceneGraphComponent {}
