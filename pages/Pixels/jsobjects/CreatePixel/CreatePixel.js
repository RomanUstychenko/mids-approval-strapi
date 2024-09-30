export default {
	async prepareCreation () {
		showModal(ConfirmCreateModal.name);
	},

	async confirmCreation () {
		await PixelEditor.create();

		closeModal(ConfirmCreateModal.name);

		storeValue("pixel", null, false);
		
		PixelEditor.refresh();

		return appsmith.store.pixel;
	}
}