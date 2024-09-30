export default {
	async prepareUpdate () {
		showModal(ConfirmPublishModal.name);
	},

	async confirmUpdate () {
		let subaffJSON = null;

		if (SubaffQueryParamInput.isValid && SubaffIDInput.isValid) {
			subaffJSON = {
				[SubaffQueryParamInput.text]: SubaffIDInput.text
			};
		}

		await update_pixel.run({ 
			pixelId: get_pixel.data.data.id,
			subaffJSON: subaffJSON
		});

		await PixelEditor.init();

		closeModal(ConfirmPublishModal.name);

		return update_pixel.data;
	}
}