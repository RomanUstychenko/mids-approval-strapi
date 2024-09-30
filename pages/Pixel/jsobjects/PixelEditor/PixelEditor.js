export default {
	async init () {
		await get_pixel.run();


		CodeInput.setValue(get_pixel.data.data.attributes.code);
		FunnelSelect.setSelectedOption(get_pixel.data.data.attributes.funnel);
		AffiliateNameSelect.setSelectedOption(get_pixel.data.data.attributes.affiliate_id);
		EventSelect.setSelectedOption(get_pixel.data.data.attributes.event);

		if(get_pixel.data.data.attributes.only_if_matches === null) {
			return;
		}

		// retrieves query parameter key from JSON objectß
		const subaffQueryParam = Object.keys(get_pixel.data.data.attributes.only_if_matches)[0];

		SubaffQueryParamInput.setValue(subaffQueryParam)
		SubaffIDInput.setValue(get_pixel.data.data.attributes.only_if_matches[subaffQueryParam])

	}
}