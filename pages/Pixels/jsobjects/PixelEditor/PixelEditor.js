export default {
	refresh(clear = false) {
		const pixelData = appsmith.store.pixel;

		if(!pixelData || clear) {
			PixelIDLabel.setText("-1");
			CodeInput.setValue("");
			FunnelSelect.setSelectedOption("");
			EventSelect.setSelectedOption("");
			AffiliateNameSelect.setSelectedOption("");
			SubaffIDInput.setValue("");
			SubaffQueryParamInput.setValue("");
			AffiliateIDLabel.setText("");
			return pixelData;
		}

		PixelIDLabel.setText(pixelData["id"].toString())
		CodeInput.setValue(pixelData["Pixel Code"]);
		console.log(pixelData["Funnel Name"])
		FunnelSelect.setSelectedOption(pixelData["Funnel Name"]);
		EventSelect.setSelectedOption(pixelData["Event"]);
		AffiliateNameSelect.setSelectedOption(pixelData["Affiliate Name"]);
		AffiliateIDLabel.setText(pixelData["Affiliate ID"]);

		return pixelData;
	},

	async create() {
		await create_pixel.run();
		await get_all_pixels.run();

		// this.refresh(true);

		return create_pixel;
	},

	matchAffiliateId() {
		const affName = AffiliateNameSelect.selectedOptionLabel;

		const foundAffData = get_all_affiliates.data.message.find((affData) => {
			return affData.sourceTitle === affName
		})

		const affId = foundAffData ? foundAffData.clientSourceId : "";

		AffiliateIDLabel.setText(affId.toString())
	},

	async edit() {
		if(PixelIDLabel.text === "-1") {
			return null;
		}

		await update_pixel.run({ 
			pixelId: Number(PixelIDLabel.text)
		});
		await get_all_pixels.run();

		// this.refresh(true);

		return update_pixel;
	},

}