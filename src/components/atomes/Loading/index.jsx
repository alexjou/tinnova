import React, { Fragment, memo } from "react";
import { View } from "react-native";
import { MaterialIndicator } from "react-native-indicators";

export const LoadingIndicator = memo((props) => {
  const { isLoading, color = '#F5F5F5' } = props;

  return (
    <Fragment>
      {isLoading && (
        <View style={{ height: 30 }}>
          <MaterialIndicator size={30} color={color} />
        </View>
      )}
    </Fragment>
  )
});