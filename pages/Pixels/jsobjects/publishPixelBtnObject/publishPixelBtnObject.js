export default {
	Button1CopyonClick () {
		if(PixelIDLabel.text === "-1") {
			CreatePixel.prepareCreation();

			return;
		}
		
		EditPixel.prepareUpdate();



	}
}