export default {	
	setSettings() {
		storeValue("kkLoginId", LoginIdInput.text);
		storeValue("kkPassword", PasswordInput.text);
	},

	revertSettings() {
		const oldLoginId = appsmith.store.kkLoginId || "";
		const oldPassword = appsmith.store.kkPassword || "";

		LoginIdInput.setValue(oldLoginId);
		PasswordInput.setValue(oldPassword);
	},

	async deleteFunnelName() {
		if (!FunnelSelect.selectedOptionValue) {
			return;
		}

		await delete_funnel_name.run();

		get_all_funnel_names.run();
	},

	async createFunnelName() {
		if (!NewFunnelNameInput.isValid) {
			return;
		}

		await create_funnel_name.run();

		NewFunnelNameInput.setValue("");

	}
}