import React, { useState } from 'react'
import { ScrollView, RefreshControl, SafeAreaView } from 'react-native'

const Refreshable = ({ children, action, variables }) => {
    const [refreshing, setRefreshing] = useState(false)

    const onRefresh = (vars = variables) => {
        setRefreshing(true)
        variables ? action({ variables: vars }) : action()
        setRefreshing(false)
    }
    return (
        <SafeAreaView>
            <ScrollView
                refreshControl={
                    <RefreshControl
                        onRefresh={onRefresh}
                        refreshing={refreshing}
                    />
                }
            >
                {children}
            </ScrollView>
        </SafeAreaView>
    )
}

export default Refreshable
