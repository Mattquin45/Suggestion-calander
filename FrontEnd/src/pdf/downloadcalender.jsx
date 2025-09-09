import React from 'react';
import { Page, Text, View, Document, Image, PDFViewer } from '@react-pdf/renderer';
import { styles } from './sty.ts';


    const DownloadCalendarPDF = ({ weekData }) => (
        <Document>
            <Page size="A4" style={styles.page}>
                <Image 
                     src="https://www.toptal.com/designers/subtlepatterns/uploads/trees.png"
                    style={styles.backgroundImage}
                />
                <View style={styles.gridContainer}>

                    //Monday
                    <View style={styles.card}>
                        <Text style={styles.dayTitle}> Monday </Text>
                        <Text style={styles.tinyDivider}></Text>
                            <View style={styles.row}>
                            <Image src="/wall-clock_5378514 copy.png" style={styles.label}></Image>
                            <Text style={styles.textRow}> {(weekData?.Monday?.hour ?? 0).toString().padStart(2, '0')}:{(weekData?.Monday?.minute ?? 0).toString().padStart(2, '0')}:{weekData?.Monday?.time} </Text>
                            </View>
                        <Text style={styles.titleTxt}>{weekData?.Monday?.title}</Text>
                        <Text style={ styles.DescriptionTxt}>{ weekData?.Monday?.description}</Text>
                    </View>


                    //Tuesday
                    <View style={styles.card}>
                        <Text style={styles.dayTitle}> Tuesday </Text>
                        <Text style={styles.tinyDivider}></Text>
                            <View style={styles.row}>
                            <Image src="/wall-clock_5378514 copy.png" style={styles.label}></Image>
                            <Text style={styles.textRow}> {(weekData?.Tuesday?.hour ?? 0).toString().padStart(2, '0')}:{(weekData?.Tuesday?.minute ?? 0).toString().padStart(2, '0')}:{weekData?.Tuesday?.time} </Text>
                            </View>
                        <Text style={styles.titleTxt}>{weekData?.Tuesday?.title}</Text>
                        <Text style={ styles.DescriptionTxt}>{ weekData?.Tuesday?.description}</Text>
                    </View>

                    //Wednesday
                    <View style={styles.card}>
                        <Text style={styles.dayTitle}> Wednesday </Text>
                        <Text style={styles.tinyDivider}></Text>
                            <View style={styles.row}>
                            <Image src="/wall-clock_5378514 copy.png" style={styles.label}></Image>
                            <Text style={styles.textRow}> {(weekData?.Wednesday?.hour ?? 0).toString().padStart(2, '0')}:{(weekData?.Wednesday?.minute ?? 0).toString().padStart(2, '0')}:{weekData?.Wednesday?.time} </Text>
                            </View>
                        <Text style={styles.titleTxt}>{weekData?.Wednesday?.title}</Text>
                        <Text style={ styles.DescriptionTxt}>{ weekData?.Wednesday?.description}</Text>
                    </View>


                    //Thursday
                    <View style={styles.card}>
                        <Text style={styles.dayTitle}> Thursday </Text>
                        <Text style={styles.tinyDivider}></Text>
                            <View style={styles.row}>
                            <Image src="/wall-clock_5378514 copy.png" style={styles.label}></Image>
                            <Text style={styles.textRow}> {(weekData?.Thursday?.hour ?? 0).toString().padStart(2, '0')}:{(weekData?.Thursday?.minute ?? 0).toString().padStart(2, '0')}:{weekData?.Thursday?.time} </Text>
                            </View>
                        <Text style={styles.titleTxt}>{weekData?.Thursday?.title}</Text>
                        <Text style={ styles.DescriptionTxt}>{ weekData?.Thursday?.description}</Text>
                    </View>

                    
                    //Friday
                    <View style={styles.card}>
                        <Text style={styles.dayTitle}> Friday </Text>
                        <Text style={styles.tinyDivider}></Text>
                            <View style={styles.row}>
                            <Image src="/wall-clock_5378514 copy.png" style={styles.label}></Image>
                            <Text style={styles.textRow}> {(weekData?.Friday?.hour ?? 0).toString().padStart(2, '0')}:{(weekData?.Friday?.minute ?? 0).toString().padStart(2, '0')}:{weekData?.Friday?.time} </Text>
                            </View>
                        <Text style={styles.titleTxt}>{weekData?.Friday?.title}</Text>
                        <Text style={ styles.DescriptionTxt}>{ weekData?.Friday?.description}</Text>
                    </View>

                    
                    //Saturday
                    <View style={styles.card}>
                        <Text style={styles.dayTitle}> Saturday </Text>
                        <Text style={styles.tinyDivider}></Text>
                            <View style={styles.row}>
                            <Image src="/wall-clock_5378514 copy.png" style={styles.label}></Image>
                            <Text style={styles.textRow}> {(weekData?.Saturday?.hour ?? 0).toString().padStart(2, '0')}:{(weekData?.Saturday?.minute ?? 0).toString().padStart(2, '0')}:{weekData?.Saturday?.time} </Text>
                            </View>
                        <Text style={styles.titleTxt}>{weekData?.Saturday?.title}</Text>
                        <Text style={ styles.DescriptionTxt}>{ weekData?.Saturday?.description}</Text>
                    </View>

                    
                    //sunday
                    <View style={styles.card}>
                        <Text style={styles.dayTitle}> Sunday </Text>
                        <Text style={styles.tinyDivider}></Text>
                            <View style={styles.row}>
                            <Image src="/wall-clock_5378514 copy.png" style={styles.label}></Image>
                            <Text style={styles.textRow}> {(weekData?.Sunday?.hour ?? 0).toString().padStart(2, '0')}:{(weekData?.Sunday?.minute ?? 0).toString().padStart(2, '0')}:{weekData?.Sunday?.time} </Text>
                            </View>
                        <Text style={styles.titleTxt}>{weekData?.Sunday?.title}</Text>
                        <Text style={ styles.DescriptionTxt}>{ weekData?.Sunday?.description}</Text>
                    </View>
                    <Text style={styles.BigDivider}></Text>

                </View>
            </Page>
        </Document>
        
    );
export default  DownloadCalendarPDF;


