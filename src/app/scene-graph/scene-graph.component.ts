import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ChangeDetectionStrategy,
  viewChild,
  ElementRef,
  signal,
} from "@angular/core";
import { injectBeforeRender } from "angular-three";
import { Mesh } from "three";

@Component({
  selector: "app-scene-graph",
  imports: [],
  templateUrl: "./scene-graph.component.html",
  styleUrl: "./scene-graph.component.scss",
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SceneGraphComponent {
  // get the reference with viewChild of the mesh
  meshRef = viewChild.required<ElementRef<Mesh>>("mesh");

  hovered = signal(false);
  clicked = signal(false);

  constructor() {
    injectBeforeRender(() => {
      const mesh = this.meshRef().nativeElement;
      if (mesh) {
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.01;
      }
    });
  }
}
