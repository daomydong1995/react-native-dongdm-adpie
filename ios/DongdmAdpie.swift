@objc(DongdmAdpie)
class DongdmAdpie: NSObject {

    @objc(multiply:withB:withResolver:withRejecter:)
    func multiply(a: Float, b: Float, resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
        resolve(a*b)
    }

    @objc(showAdPieVideoAds:withResolver:withRejecter:)
    func showAdPieVideoAds(_ data: NSDictionary,
     resolver resolve:  RCTPromiseResolveBlock,
      rejecter reject: RCTPromiseRejectBlock) -> Void {
        do {
            DispatchQueue.main.async {
                let vc = AdPieVC()
                vc.modalPresentationStyle = .fullScreen
                let controller = RCTPresentedViewController()
                controller?.present(vc, animated: true)
            }
            resolve(true)
        } catch {
            resolve(false)
        }
    }
}
