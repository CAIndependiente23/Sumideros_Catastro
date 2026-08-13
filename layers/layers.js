var wms_layers = [];

var format_SumiderosZ5_0 = new ol.format.GeoJSON();
var features_SumiderosZ5_0 = format_SumiderosZ5_0.readFeatures(json_SumiderosZ5_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SumiderosZ5_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SumiderosZ5_0.addFeatures(features_SumiderosZ5_0);
var lyr_SumiderosZ5_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SumiderosZ5_0, 
                style: style_SumiderosZ5_0,
                popuplayertitle: 'Sumideros Z5',
                interactive: true,
                title: '<img src="styles/legend/SumiderosZ5_0.png" /> Sumideros Z5'
            });
var format_SumiderosZ4_1 = new ol.format.GeoJSON();
var features_SumiderosZ4_1 = format_SumiderosZ4_1.readFeatures(json_SumiderosZ4_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SumiderosZ4_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SumiderosZ4_1.addFeatures(features_SumiderosZ4_1);
var lyr_SumiderosZ4_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SumiderosZ4_1, 
                style: style_SumiderosZ4_1,
                popuplayertitle: 'Sumideros Z4',
                interactive: true,
                title: '<img src="styles/legend/SumiderosZ4_1.png" /> Sumideros Z4'
            });
var format_SumiderosZ3_2 = new ol.format.GeoJSON();
var features_SumiderosZ3_2 = format_SumiderosZ3_2.readFeatures(json_SumiderosZ3_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SumiderosZ3_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SumiderosZ3_2.addFeatures(features_SumiderosZ3_2);
var lyr_SumiderosZ3_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SumiderosZ3_2, 
                style: style_SumiderosZ3_2,
                popuplayertitle: 'Sumideros Z3',
                interactive: true,
                title: '<img src="styles/legend/SumiderosZ3_2.png" /> Sumideros Z3'
            });
var format_SumiderosZ2_3 = new ol.format.GeoJSON();
var features_SumiderosZ2_3 = format_SumiderosZ2_3.readFeatures(json_SumiderosZ2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SumiderosZ2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SumiderosZ2_3.addFeatures(features_SumiderosZ2_3);
var lyr_SumiderosZ2_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SumiderosZ2_3, 
                style: style_SumiderosZ2_3,
                popuplayertitle: 'Sumideros Z2',
                interactive: true,
                title: '<img src="styles/legend/SumiderosZ2_3.png" /> Sumideros Z2'
            });
var format_SumiderosZ1_4 = new ol.format.GeoJSON();
var features_SumiderosZ1_4 = format_SumiderosZ1_4.readFeatures(json_SumiderosZ1_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SumiderosZ1_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SumiderosZ1_4.addFeatures(features_SumiderosZ1_4);
var lyr_SumiderosZ1_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SumiderosZ1_4, 
                style: style_SumiderosZ1_4,
                popuplayertitle: 'Sumideros Z1',
                interactive: true,
                title: '<img src="styles/legend/SumiderosZ1_4.png" /> Sumideros Z1'
            });
var format_COMUNAS_CABA_5 = new ol.format.GeoJSON();
var features_COMUNAS_CABA_5 = format_COMUNAS_CABA_5.readFeatures(json_COMUNAS_CABA_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COMUNAS_CABA_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMUNAS_CABA_5.addFeatures(features_COMUNAS_CABA_5);
var lyr_COMUNAS_CABA_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COMUNAS_CABA_5, 
                style: style_COMUNAS_CABA_5,
                popuplayertitle: 'COMUNAS_CABA',
                interactive: false,
                title: '<img src="styles/legend/COMUNAS_CABA_5.png" /> COMUNAS_CABA'
            });
var format_caba_manzanas_6 = new ol.format.GeoJSON();
var features_caba_manzanas_6 = format_caba_manzanas_6.readFeatures(json_caba_manzanas_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_caba_manzanas_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_caba_manzanas_6.addFeatures(features_caba_manzanas_6);
var lyr_caba_manzanas_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_caba_manzanas_6, 
                style: style_caba_manzanas_6,
                popuplayertitle: 'caba_manzanas',
                interactive: false,
                title: '<img src="styles/legend/caba_manzanas_6.png" /> caba_manzanas'
            });
var format_espaciosverdescatastralesespaciosverdescatastro_espacios_verdes_08042020shp_7 = new ol.format.GeoJSON();
var features_espaciosverdescatastralesespaciosverdescatastro_espacios_verdes_08042020shp_7 = format_espaciosverdescatastralesespaciosverdescatastro_espacios_verdes_08042020shp_7.readFeatures(json_espaciosverdescatastralesespaciosverdescatastro_espacios_verdes_08042020shp_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_espaciosverdescatastralesespaciosverdescatastro_espacios_verdes_08042020shp_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_espaciosverdescatastralesespaciosverdescatastro_espacios_verdes_08042020shp_7.addFeatures(features_espaciosverdescatastralesespaciosverdescatastro_espacios_verdes_08042020shp_7);
var lyr_espaciosverdescatastralesespaciosverdescatastro_espacios_verdes_08042020shp_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_espaciosverdescatastralesespaciosverdescatastro_espacios_verdes_08042020shp_7, 
                style: style_espaciosverdescatastralesespaciosverdescatastro_espacios_verdes_08042020shp_7,
                popuplayertitle: 'espacios-verdes-catastrales — espacios verdes/catastro_espacios_verdes_08042020.shp',
                interactive: false,
                title: '<img src="styles/legend/espaciosverdescatastralesespaciosverdescatastro_espacios_verdes_08042020shp_7.png" /> espacios-verdes-catastrales — espacios verdes/catastro_espacios_verdes_08042020.shp'
            });
var format_espacioverdeprivadoespacio_verde_privado_wgs84shp_8 = new ol.format.GeoJSON();
var features_espacioverdeprivadoespacio_verde_privado_wgs84shp_8 = format_espacioverdeprivadoespacio_verde_privado_wgs84shp_8.readFeatures(json_espacioverdeprivadoespacio_verde_privado_wgs84shp_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_espacioverdeprivadoespacio_verde_privado_wgs84shp_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_espacioverdeprivadoespacio_verde_privado_wgs84shp_8.addFeatures(features_espacioverdeprivadoespacio_verde_privado_wgs84shp_8);
var lyr_espacioverdeprivadoespacio_verde_privado_wgs84shp_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_espacioverdeprivadoespacio_verde_privado_wgs84shp_8, 
                style: style_espacioverdeprivadoespacio_verde_privado_wgs84shp_8,
                popuplayertitle: 'espacio-verde-privado — espacio_verde_privado_wgs84.shp',
                interactive: false,
                title: '<img src="styles/legend/espacioverdeprivadoespacio_verde_privado_wgs84shp_8.png" /> espacio-verde-privado — espacio_verde_privado_wgs84.shp'
            });
var format_callejeroetiqueta_9 = new ol.format.GeoJSON();
var features_callejeroetiqueta_9 = format_callejeroetiqueta_9.readFeatures(json_callejeroetiqueta_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_callejeroetiqueta_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_callejeroetiqueta_9.addFeatures(features_callejeroetiqueta_9);
var lyr_callejeroetiqueta_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_callejeroetiqueta_9, 
                style: style_callejeroetiqueta_9,
                popuplayertitle: 'callejero etiqueta',
                interactive: false,
                title: 'callejero etiqueta'
            });
var group_BASE = new ol.layer.Group({
                                layers: [lyr_COMUNAS_CABA_5,lyr_caba_manzanas_6,lyr_espaciosverdescatastralesespaciosverdescatastro_espacios_verdes_08042020shp_7,lyr_espacioverdeprivadoespacio_verde_privado_wgs84shp_8,lyr_callejeroetiqueta_9,],
                                fold: 'close',
                                title: 'BASE'});
var group_Sumideros = new ol.layer.Group({
                                layers: [lyr_SumiderosZ5_0,lyr_SumiderosZ4_1,lyr_SumiderosZ3_2,lyr_SumiderosZ2_3,lyr_SumiderosZ1_4,],
                                fold: 'close',
                                title: 'Sumideros'});

lyr_SumiderosZ5_0.setVisible(false);lyr_SumiderosZ4_1.setVisible(false);lyr_SumiderosZ3_2.setVisible(false);lyr_SumiderosZ2_3.setVisible(false);lyr_SumiderosZ1_4.setVisible(false);lyr_COMUNAS_CABA_5.setVisible(false);lyr_caba_manzanas_6.setVisible(false);lyr_espaciosverdescatastralesespaciosverdescatastro_espacios_verdes_08042020shp_7.setVisible(false);lyr_espacioverdeprivadoespacio_verde_privado_wgs84shp_8.setVisible(false);lyr_callejeroetiqueta_9.setVisible(false);group_Sumideros.setVisible(false);group_BASE.setVisible(false);
var layersList = [group_Sumideros,group_BASE];
lyr_SumiderosZ5_0.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'text': 'text', });
lyr_SumiderosZ4_1.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'text': 'text', });
lyr_SumiderosZ3_2.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'text': 'text', });
lyr_SumiderosZ2_3.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'text': 'text', });
lyr_SumiderosZ1_4.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'text': 'text', });
lyr_COMUNAS_CABA_5.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'OBJETO': 'OBJETO', 'COMUNAS': 'COMUNAS', 'BARRIOS': 'BARRIOS', 'PERIMETRO': 'PERIMETRO', 'AREA': 'AREA', 'AREA_KM2': 'AREA_KM2', });
lyr_caba_manzanas_6.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ZONA': 'ZONA', });
lyr_espaciosverdescatastralesespaciosverdescatastro_espacios_verdes_08042020shp_7.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'SECCION': 'SECCION', 'MANZANA': 'MANZANA', 'PARCELA': 'PARCELA', 'SMP': 'SMP', 'TIPO_EV': 'TIPO_EV', 'NOMBRE_EV': 'NOMBRE_EV', 'UBICACION': 'UBICACION', 'OBS': 'OBS', 'BARRIO': 'BARRIO', 'COMUNA': 'COMUNA', 'SUPERFICIE': 'SUPERFICIE', 'LEY': 'LEY', 'FECHA_LEY': 'FECHA_LEY', 'ORDENANZA': 'ORDENANZA', 'FECHA_ORD': 'FECHA_ORD', 'DECRETO': 'DECRETO', 'FECHA_DEC': 'FECHA_DEC', 'BOLETIN_OF': 'BOLETIN_OF', 'FECHA_BO': 'FECHA_BO', 'FUENTE1': 'FUENTE1', 'FUENTE2': 'FUENTE2', 'FUENTE3': 'FUENTE3', 'FUENTE4': 'FUENTE4', 'NIVEL': 'NIVEL', });
lyr_espacioverdeprivadoespacio_verde_privado_wgs84shp_8.set('fieldAliases', {'fid': 'fid', 'id_ev_priv': 'id_ev_priv', 'nombre': 'nombre', 'fuente': 'fuente', 'ubicacion': 'ubicacion', 'Decreto': 'Decreto', 'Ordenaza': 'Ordenaza', 'Boletin': 'Boletin', 'fecha_decr': 'fecha_decr', 'fecha_orde': 'fecha_orde', 'fecha_bole': 'fecha_bole', 'Nombre_ori': 'Nombre_ori', 'Observacio': 'Observacio', 'BARRIO': 'BARRIO', 'COMUNA': 'COMUNA', 'area': 'area', 'perimeter': 'perimeter', 'TIPO_ESPAC': 'TIPO_ESPAC', 'nom_mapa': 'nom_mapa', });
lyr_callejeroetiqueta_9.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'codigo': 'codigo', 'nomoficial': 'nomoficial', 'alt_izqini': 'alt_izqini', 'alt_izqfin': 'alt_izqfin', 'alt_derini': 'alt_derini', 'alt_derfin': 'alt_derfin', 'nomanter': 'nomanter', 'nom_mapa': 'nom_mapa', 'tipo_c': 'tipo_c', 'long': 'long', 'sentido': 'sentido', 'cod_sent': 'cod_sent', 'observa': 'observa', 'bicisenda': 'bicisenda', 'lado_ciclo': 'lado_ciclo', 'recorrid_x': 'recorrid_x', 'ciclo_obse': 'ciclo_obse', 'tooltip_bi': 'tooltip_bi', 'red_jerarq': 'red_jerarq', 'red_tp': 'red_tp', 'ffcc': 'ffcc', 'tipo_ffcc': 'tipo_ffcc', 'COMUNA': 'COMUNA', 'COM_PAR': 'COM_PAR', 'COM_IMPAR': 'COM_IMPAR', 'BARRIO': 'BARRIO', 'BARRIO_PAR': 'BARRIO_PAR', 'BARRIO_IMP': 'BARRIO_IMP', });
lyr_SumiderosZ5_0.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'text': 'TextEdit', });
lyr_SumiderosZ4_1.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'text': 'TextEdit', });
lyr_SumiderosZ3_2.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'text': 'TextEdit', });
lyr_SumiderosZ2_3.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'text': 'TextEdit', });
lyr_SumiderosZ1_4.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'text': 'TextEdit', });
lyr_COMUNAS_CABA_5.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'OBJETO': 'TextEdit', 'COMUNAS': 'TextEdit', 'BARRIOS': 'TextEdit', 'PERIMETRO': 'TextEdit', 'AREA': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_caba_manzanas_6.set('fieldImages', {'fid': '', 'ID': 'Range', 'ZONA': 'TextEdit', });
lyr_espaciosverdescatastralesespaciosverdescatastro_espacios_verdes_08042020shp_7.set('fieldImages', {'fid': '', 'OBJECTID': 'TextEdit', 'SECCION': 'TextEdit', 'MANZANA': 'TextEdit', 'PARCELA': 'TextEdit', 'SMP': 'TextEdit', 'TIPO_EV': 'TextEdit', 'NOMBRE_EV': 'TextEdit', 'UBICACION': 'TextEdit', 'OBS': 'TextEdit', 'BARRIO': 'TextEdit', 'COMUNA': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'LEY': 'TextEdit', 'FECHA_LEY': 'TextEdit', 'ORDENANZA': 'TextEdit', 'FECHA_ORD': 'TextEdit', 'DECRETO': 'TextEdit', 'FECHA_DEC': 'TextEdit', 'BOLETIN_OF': 'TextEdit', 'FECHA_BO': 'DateTime', 'FUENTE1': 'TextEdit', 'FUENTE2': 'TextEdit', 'FUENTE3': 'TextEdit', 'FUENTE4': 'TextEdit', 'NIVEL': 'TextEdit', });
lyr_espacioverdeprivadoespacio_verde_privado_wgs84shp_8.set('fieldImages', {'fid': '', 'id_ev_priv': 'TextEdit', 'nombre': 'TextEdit', 'fuente': 'TextEdit', 'ubicacion': 'TextEdit', 'Decreto': 'TextEdit', 'Ordenaza': 'TextEdit', 'Boletin': 'TextEdit', 'fecha_decr': 'TextEdit', 'fecha_orde': 'TextEdit', 'fecha_bole': 'TextEdit', 'Nombre_ori': 'TextEdit', 'Observacio': 'TextEdit', 'BARRIO': 'TextEdit', 'COMUNA': 'Range', 'area': 'TextEdit', 'perimeter': 'TextEdit', 'TIPO_ESPAC': 'TextEdit', 'nom_mapa': 'TextEdit', });
lyr_callejeroetiqueta_9.set('fieldImages', {'fid': '', 'id': 'Range', 'codigo': 'Range', 'nomoficial': 'TextEdit', 'alt_izqini': 'Range', 'alt_izqfin': 'Range', 'alt_derini': 'Range', 'alt_derfin': 'Range', 'nomanter': 'TextEdit', 'nom_mapa': 'TextEdit', 'tipo_c': 'TextEdit', 'long': 'TextEdit', 'sentido': 'TextEdit', 'cod_sent': 'Range', 'observa': 'TextEdit', 'bicisenda': 'TextEdit', 'lado_ciclo': 'TextEdit', 'recorrid_x': 'TextEdit', 'ciclo_obse': 'TextEdit', 'tooltip_bi': 'TextEdit', 'red_jerarq': 'TextEdit', 'red_tp': 'TextEdit', 'ffcc': 'TextEdit', 'tipo_ffcc': 'TextEdit', 'COMUNA': 'Range', 'COM_PAR': 'Range', 'COM_IMPAR': 'Range', 'BARRIO': 'TextEdit', 'BARRIO_PAR': 'TextEdit', 'BARRIO_IMP': 'TextEdit', });
lyr_SumiderosZ5_0.set('fieldLabels', {'fid': 'no label', 'layer': 'no label', 'text': 'no label', });
lyr_SumiderosZ4_1.set('fieldLabels', {'fid': 'no label', 'layer': 'no label', 'text': 'no label', });
lyr_SumiderosZ3_2.set('fieldLabels', {'fid': 'no label', 'layer': 'no label', 'text': 'no label', });
lyr_SumiderosZ2_3.set('fieldLabels', {'fid': 'no label', 'layer': 'no label', 'text': 'no label', });
lyr_SumiderosZ1_4.set('fieldLabels', {'fid': 'no label', 'layer': 'no label', 'text': 'no label', });
lyr_COMUNAS_CABA_5.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'OBJETO': 'no label', 'COMUNAS': 'no label', 'BARRIOS': 'no label', 'PERIMETRO': 'no label', 'AREA': 'no label', 'AREA_KM2': 'no label', });
lyr_caba_manzanas_6.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ZONA': 'no label', });
lyr_espaciosverdescatastralesespaciosverdescatastro_espacios_verdes_08042020shp_7.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'SECCION': 'no label', 'MANZANA': 'no label', 'PARCELA': 'no label', 'SMP': 'no label', 'TIPO_EV': 'no label', 'NOMBRE_EV': 'no label', 'UBICACION': 'no label', 'OBS': 'no label', 'BARRIO': 'no label', 'COMUNA': 'no label', 'SUPERFICIE': 'no label', 'LEY': 'no label', 'FECHA_LEY': 'no label', 'ORDENANZA': 'no label', 'FECHA_ORD': 'no label', 'DECRETO': 'no label', 'FECHA_DEC': 'no label', 'BOLETIN_OF': 'no label', 'FECHA_BO': 'no label', 'FUENTE1': 'no label', 'FUENTE2': 'no label', 'FUENTE3': 'no label', 'FUENTE4': 'no label', 'NIVEL': 'no label', });
lyr_espacioverdeprivadoespacio_verde_privado_wgs84shp_8.set('fieldLabels', {'fid': 'no label', 'id_ev_priv': 'no label', 'nombre': 'no label', 'fuente': 'no label', 'ubicacion': 'no label', 'Decreto': 'no label', 'Ordenaza': 'no label', 'Boletin': 'no label', 'fecha_decr': 'no label', 'fecha_orde': 'no label', 'fecha_bole': 'no label', 'Nombre_ori': 'no label', 'Observacio': 'no label', 'BARRIO': 'no label', 'COMUNA': 'no label', 'area': 'no label', 'perimeter': 'no label', 'TIPO_ESPAC': 'no label', 'nom_mapa': 'no label', });
lyr_callejeroetiqueta_9.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'codigo': 'no label', 'nomoficial': 'no label', 'alt_izqini': 'no label', 'alt_izqfin': 'no label', 'alt_derini': 'no label', 'alt_derfin': 'no label', 'nomanter': 'no label', 'nom_mapa': 'no label', 'tipo_c': 'no label', 'long': 'no label', 'sentido': 'no label', 'cod_sent': 'no label', 'observa': 'no label', 'bicisenda': 'no label', 'lado_ciclo': 'no label', 'recorrid_x': 'no label', 'ciclo_obse': 'no label', 'tooltip_bi': 'no label', 'red_jerarq': 'no label', 'red_tp': 'no label', 'ffcc': 'no label', 'tipo_ffcc': 'no label', 'COMUNA': 'no label', 'COM_PAR': 'no label', 'COM_IMPAR': 'no label', 'BARRIO': 'no label', 'BARRIO_PAR': 'no label', 'BARRIO_IMP': 'no label', });
lyr_callejeroetiqueta_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});