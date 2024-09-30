export default {
	async prepareDuplication (pixelData) {
		storeValue("pixel", pixelData, false);

		showModal(ConfirmDuplicateModal.name);

		return appsmith.store.pixel
	},

	async confirmDuplication () {
		await create_pixel.run();
		await get_all_pixels.run();

		closeModal(ConfirmDuplicateModal.name);

		removeValue("pixel");

		return create_pixel.data;
	}
}