// base , common
import React, { PureComponent } from 'react';
import {
    StyleSheet,
    View,
    Image,
} from 'react-native';
import * as Progress from 'react-native-progress';
import { create, PREDEF_RES } from 'react-native-pixel-perfect';
 
const perfectSize = create(PREDEF_RES.iphoneX.dp);

export class ProcessIndicator extends PureComponent {
    render() {
        const mainColor = 'rgb(155, 165, 199)';
        const missingPartColor = 'rgba(155, 165, 199, 0.2)'; 

        return (
            <View style={s.container}>
                <Progress.Circle 
                    size={perfectSize(140)} 
                    indeterminate={true} 
                    borderWidth={8} 
                    indeterminateAnimationDuration={2200}
                    strokeCap='round'
                    endAngle={0.8}
                    borderColor={mainColor}
                    direction='counter-clockwise'
                />
                <View style={{
                    width: perfectSize(47),
                    height: perfectSize(59),
                    backgroundColor: 'transparent',
                    overflow: 'hidden',
                    position: 'absolute',
                    zIndex: 2
                }}>
                    <Image style={{
                        width: '100%',
                        height: '100%',
                        resizeMode: 'contain'
                    }}
                    source={images.plannerbee_logo_smaller}
                    />
                </View>

                <View style={{
                    width: perfectSize(140),
                    height: perfectSize(140),
                    backgroundColor: missingPartColor,
                    overflow: 'hidden',
                    position: 'absolute',
                    borderRadius: 200,
                    zIndex: -1
                }}>
                </View>

                <View style={{
                    width: perfectSize(125),
                    height: perfectSize(125),
                    backgroundColor: 'white',
                    overflow: 'hidden',
                    position: 'absolute',
                    borderRadius: 200,
                    zIndex: 0
                }}>
                </View>
        </View>
        );
    }
}

const s = StyleSheet.create({
    container: {
        width: '100%', 
        height: perfectSize(200), 
        backgroundColor: 'white', 
        justifyContent: 'center', 
        alignItems: 'center' ,
    },
});
