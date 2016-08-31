return clipText.toLowerCase().replace(/[:. -]/g).match(/.{1,4}/g).join(".");
