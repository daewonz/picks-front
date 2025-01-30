import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import { fa } from 'vuetify/iconsets/fa'; // Font Awesome 아이콘셋
import { mdi } from 'vuetify/iconsets/mdi'; // Material Design Icons 아이콘셋

import { createVuetify } from 'vuetify';

import * as components from 'vuetify/components';

import * as directives from 'vuetify/directives';

export default createVuetify({
	components,
	directives,
	icons: {
		//defaultSet: '', // 기본 아이콘셋을 Font Awesome으로 설정
		//aliases, // 아이콘 별칭
		sets: {
			fa, // Font Awesome
			mdi, // Material Design Icons
		},
	},
});
