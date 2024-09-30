export default {
	async prepareCreate () {
		showModal(ConfirmCreateModal.name);
	},

	async confirmCreate () {
		let subaffJSON = null;

		if (SubaffQueryParamInput.isValid && SubaffIDInput.isValid) {
			subaffJSON = {
				[SubaffQueryParamInput.text]: SubaffIDInput.text
			};
		}

		await create_pixel.run({
			subaffJSON: subaffJSON
		});

		await PixelEditor.init();

		closeModal(ConfirmCreateModal.name);

		if(create_pixel.data.data) {
			showModal(SuccessDialogModal.name);
		}

		return create_pixel.data;
	}
}