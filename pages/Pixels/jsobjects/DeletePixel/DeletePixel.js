export default {
	async prepareDeletion (pixelData) {
		storeValue("pixel", pixelData, false);

		showModal(ConfirmDeleteModal.name);

		return appsmith.store.pixel
	},

	async confirmDeletion () {
		await delete_pixel.run({ 
			pixelId: appsmith.store.pixel.id
		});

		await get_all_pixels.run();

		closeModal(ConfirmDeleteModal.name);

		removeValue("pixel");
		
		return delete_pixel.data;
	}
}