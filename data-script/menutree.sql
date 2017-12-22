-- --------------------------------------------------------
-- 主机:                           127.0.0.1
-- 服务器版本:                        5.7.20 - MySQL Community Server (GPL)
-- 服务器操作系统:                      Win64
-- HeidiSQL 版本:                  9.3.0.4984
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
-- 正在导出表  mahjong.menutree 的数据：~8 rows (大约)
/*!40000 ALTER TABLE `menutree` DISABLE KEYS */;
INSERT INTO `menutree` (`id`, `m_name`, `father_id`, `sub_id`, `order_num`, `icon_class`, `href`) VALUES
	(1, '游戏管理', NULL, NULL, 1, 'ion-cube', NULL),
	(2, '计费管理', NULL, NULL, 2, 'ion-cash', NULL),
	(3, '订单管理', NULL, NULL, 3, 'ion-clipboard', NULL),
	(4, '用户管理', NULL, NULL, 4, 'ion-person-stalker', NULL),
	(5, '活动管理', NULL, NULL, 5, 'ion-speakerphone', NULL),
	(6, '数据统计', NULL, NULL, 6, 'ion-stats-bars', '/statistics'),
	(7, '消息管理', NULL, NULL, 7, 'ion-chatbox-working', NULL),
	(8, '权限管理', NULL, NULL, 8, 'ion-locked', NULL);
/*!40000 ALTER TABLE `menutree` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
