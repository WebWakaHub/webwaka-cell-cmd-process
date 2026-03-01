/**
 * CmdProcess — Cell Layer
 * Composes organelles per BIOLOGICAL_GOVERNANCE_CONSTITUTION §4.1
 * Layer: cell → depends on → organelle
 */

import { WorkflowOrchestratorOrchestrator } from "@webwaka/organelle-workflow-orchestrator";
import { ValidationEngineOrchestrator } from "@webwaka/organelle-validation-engine";

export { WorkflowOrchestratorOrchestrator } from '@webwaka/organelle-workflow-orchestrator';
export { ValidationEngineOrchestrator } from '@webwaka/organelle-validation-engine';

/**
 * CmdProcess Composition
 * Assembles organelle-layer components into a cohesive cell-layer capability.
 */
export class CmdProcessComposition {
  private workflowOrchestratorOrchestrator: WorkflowOrchestratorOrchestrator;
  private validationEngineOrchestrator: ValidationEngineOrchestrator;

  constructor() {
    this.workflowOrchestratorOrchestrator = new WorkflowOrchestratorOrchestrator();
    this.validationEngineOrchestrator = new ValidationEngineOrchestrator();
  }
}

export * from "./types";
