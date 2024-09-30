export default {
	NewPixelButtononClick () {
		storeValue("pixel", null, false);
		PixelEditor.refresh();

		return appsmith.store.pixel
	}
}