/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   variables-consumer-mixin.html
 */

/// <reference path="../polymer/types/lib/utils/mixin.d.ts" />
/// <reference path="../polymer/types/lib/utils/render-status.d.ts" />

declare namespace ArcComponents {


  /**
   * A mixin to be used with elements that consumes variables and environments
   * state. Contains all methods and listeners to kee variables and environments
   * up to date.
   */
  function VariablesConsumerMixin<T extends new (...args: any[]) => {}>(base: T): T & VariablesConsumerMixinConstructor;

  interface VariablesConsumerMixinConstructor {
    new(...args: any[]): VariablesConsumerMixin;
  }

  interface VariablesConsumerMixin {

    /**
     * Currently activated environment.
     */
    environment: string|null|undefined;

    /**
     * List of all available environments.
     */
    environments: Array<object|null>|null;

    /**
     * List of available variables for the environment.
     */
    variables: Array<object|null>|null;

    /**
     * Computed value, true if variables are available for current
     * environment.
     */
    readonly hasVariables: boolean|null|undefined;

    /**
     * Computed value, true if there's a list of environments set.
     */
    readonly hasEnvironments: boolean|null|undefined;
    connectedCallback(): void;
    disconnectedCallback(): void;

    /**
     * Asks variables manager for current environment and variables.
     *
     * Note, At the moment of initialization the manager may not be in the DOM.
     * In this case the initialization fails. However, when the manager is
     * initialized it dispatched events to update variables and environments.
     */
    _initializeVariables(): void;

    /**
     * Refreshes list of variables and current environment.
     *
     * @param noThrows When set it does not throw error when model is
     * not found.
     */
    refreshState(noThrows: Boolean|null): void;

    /**
     * Refreshes list of environments.
     */
    refreshEnvironments(): Promise<any>|null;

    /**
     * Computes `hasVariables` property.
     *
     * @param variables List of current variables.
     * @returns True if list is not empty.
     */
    _computeHasVariables(variables: any[]|null): Boolean|null;

    /**
     * Computes `hasEnvironments` property.
     *
     * @param environments List of current environments.
     * @returns True if list is not empty.
     */
    _computeHasEnvs(environments: any[]|null): Boolean|null;

    /**
     * Removes variables and updates environment.
     */
    _envChangedHandler(e: CustomEvent|null): void;

    /**
     * Handler for the `variables-list-changed` event.
     * Sets list of the variables.
     */
    _varListChangedHandler(e: CustomEvent|null): void;

    /**
     * Handler for `variable-updated` event. Updates variable in the list
     * if it is on it or adds it otherwise.
     */
    _varUpdateHandler(e: CustomEvent|null): void;

    /**
     * Handler for `variable-deleted` event. Removes variable from the list
     * if it is on it.
     */
    _varDeleteHandler(e: CustomEvent|null): void;

    /**
     * Finds variable index on the variables list.
     *
     * @param id PouchDB data id
     * @returns Variable index or -1.
     */
    _getVariableIndex(id: String|null): Number|null;

    /**
     * Handler for non-cancelable `environment-deleted` event.
     * Removes environment if it exists on the list.
     */
    _envDeleteHandler(e: CustomEvent|null): void;

    /**
     * Handler for non-cancelable `environment-updated` event.
     * Updates / adds environment to the list.
     */
    _envUpdateHandler(e: CustomEvent|null): void;
  }
}
