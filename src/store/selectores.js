export const getDocumentTile = store => (store && store.todos ? store.todos.documentTitle : 'tt');
export const getFixedHeader = store => (store && store.setting ? store.setting.fixedHeader : false);
