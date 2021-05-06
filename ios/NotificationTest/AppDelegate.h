#import <React/RCTBridgeDelegate.h>
#import <UIKit/UIKit.h>
#import <UserNotifications/UserNotifications.h>

@import IterableSDK;

@interface AppDelegate : UIResponder <UIApplicationDelegate, RCTBridgeDelegate, UNUserNotificationCenterDelegate, IterableURLDelegate, IterableCustomActionDelegate>

@property (nonatomic, strong) UIWindow *window;

@end
