let onPokemonAddedCallback = null;

export function onPokemonAdded(callback) {
  onPokemonAddedCallback = callback;
}

export function triggerPokemonAdded() {
  if (onPokemonAddedCallback) {
    onPokemonAddedCallback();
  }
}
