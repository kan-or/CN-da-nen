import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Dữ liệu mảng cho FlatList
const FEATURED_PRODUCTS = [
  {
    id: "1",
    title: "Khóa học React Native",
    price: "499.000đ",
    img: "https://picsum.photos/200/150?random=1",
  },
  {
    id: "2",
    title: "Khóa học TypeScript",
    price: "299.000đ",
    img: "https://picsum.photos/200/150?random=2",
  },
  {
    id: "3",
    title: "Khóa học UI/UX Mobile",
    price: "399.000đ",
    img: "https://picsum.photos/200/150?random=3",
  },
  {
    id: "4",
    title: "Khóa học Flutter",
    price: "499.000đ",
    img: "https://picsum.photos/200/150?random=4",
  },
  {
    id: "5",
    title: "Khóa học React Native",
    price: "499.000đ",
    img: "https://picsum.photos/200/150?random=5 ",
  },
];

// Dữ liệu phân nhóm cho SectionList (Tin tức & Thông báo)
const SECTION_DATA = [
  {
    title: "📢 Tin tức mới",
    data: ["Cập nhật Expo SDK mới nhất", "Mẹo tối ưu Flexbox trong Mobile UI"],
  },
  {
    title: "🔔 Thông báo hệ thống",
    data: [
      "Lịch bảo trì server ngày 15/09",
      "Sự kiện Hackathon Sinh Viên 2026",
    ],
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* 1. HEADER */}
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image
            source={{ uri: "https://picsum.photos/100/100" }}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.welcomeText}>Xin chào,</Text>
            <Text style={styles.userNameText}>Rô Y Khang 👋</Text>
          </View>
        </View>
        <Pressable
          style={styles.notificationBtn}
          onPress={() => alert("Chưa có thông báo mới!")}
        >
          <Text style={styles.notificationIcon}>🔔</Text>
        </Pressable>
      </View>

      {/* NỘI DUNG CÓ THỂ CUỘN (ScrollView) */}
      <ScrollView
        contentContainerStyle={styles.scrollBody}
        showsVerticalScrollIndicator={false}
      >
        {/* 2. KHU VỰC THÔNG TIN CHÍNH */}
        <View style={styles.mainCard}>
          <Text style={styles.cardLabel}>Tổng quan tài khoản</Text>
          <Text style={styles.cardBalance}>36.000.000.000 VNĐ</Text>
          <Text style={styles.cardSubText}>
            Số dư khả dụng 
          </Text>

          {/* NÚT THAO TÁC (Pressable) */}
          <View style={styles.actionRow}>
            <Pressable
              style={styles.primaryBtn}
              onPress={() => alert("Bấm nút Nạp tiền")}
            >
              <Text style={styles.primaryBtnText}>+ Nạp tiền</Text>
            </Pressable>
            <Pressable
              style={styles.secondaryBtn}
              onPress={() => alert("Bấm nút Lịch sử")}
            >
              <Text style={styles.secondaryBtnText}>Lịch sử</Text>
            </Pressable>
          </View>
        </View>

        {/* 3. DANH SÁCH NỘI DUNG 1: FlatList (Cuộn ngang) */}
        <View style={styles.sectionBox}>
          <Text style={styles.sectionTitle}>Sản phẩm (FlatList)</Text>
          <FlatList
            data={FEATURED_PRODUCTS}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={styles.productCard}>
                <Image source={{ uri: item.img }} style={styles.productImg} />
                <Text style={styles.productTitle}>{item.title}</Text>
                <Text style={styles.productPrice}>{item.price}</Text>
              </View>
            )}
          />
        </View>

        {/* 4. DANH SÁCH NỘI DUNG 2: SectionList (Phân nhóm) */}
        <View style={styles.sectionBox}>
          <Text style={styles.sectionTitle}>
            Danh mục thông tin (SectionList)
          </Text>
          <SectionList
            sections={SECTION_DATA}
            keyExtractor={(item, index) => item + index}
            scrollEnabled={false} // Tắt cuộn riêng để dùng chung cuộn của ScrollView cha
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.groupTitle}>{title}</Text>
            )}
            renderItem={({ item }) => (
              <View style={styles.newsCard}>
                <Text style={styles.newsText}>• {item}</Text>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// BỐ CỤC SỬ DỤNG FLEXBOX & STYLESHEET
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f4f6f9",
  },
  // Header dùng Flexbox dạng Row để xếp Avatar + Tên bên trái, Chuông bên phải
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eef0f2",
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
  },
  welcomeText: {
    fontSize: 12,
    color: "#6c757d",
  },
  userNameText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#212529",
  },
  notificationBtn: {
    padding: 8,
    backgroundColor: "#f8f9fa",
    borderRadius: 20,
  },
  notificationIcon: {
    fontSize: 16,
  },
  scrollBody: {
    padding: 16,
    gap: 20,
  },
  // Main Card
  mainCard: {
    backgroundColor: "#0477fc",
    borderRadius: 14,
    padding: 20,
  },
  cardLabel: {
    color: "#e0e8ff",
    fontSize: 13,
  },
  cardBalance: {
    color: "#ffffff",
    fontSize: 26,
    fontWeight: "bold",
    marginVertical: 6,
  },
  cardSubText: {
    color: "#cce0ff",
    fontSize: 12,
    marginBottom: 16,
  },
  actionRow: {
    flexDirection: "row",
    gap: 12,
  },
  primaryBtn: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  primaryBtnText: {
    color: "#0d6efd",
    fontWeight: "bold",
    fontSize: 14,
  },
  secondaryBtn: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  secondaryBtnText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 14,
  },
  // Sections
  sectionBox: {
    gap: 10,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#212529",
  },
  // FlatList items
  productCard: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 10,
    marginRight: 12,
    width: 150,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  productImg: {
    width: "100%",
    height: 95,
    borderRadius: 6,
    backgroundColor: "#e9ecef",
  },
  productTitle: {
    fontSize: 13,
    fontWeight: "600",
    marginTop: 8,
    color: "#333",
  },
  productPrice: {
    fontSize: 13,
    color: "#0d6efd",
    fontWeight: "bold",
    marginTop: 4,
  },
  // SectionList items
  groupTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#495057",
    marginTop: 8,
    marginBottom: 4,
  },
  newsCard: {
    backgroundColor: "#ffffff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 6,
  },
  newsText: {
    fontSize: 14,
    color: "#343a40",
  },
});
