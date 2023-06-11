-- phpMyAdmin SQL Dump
-- version 5.2.2-dev+20230610.e6bbb848a3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 11, 2023 at 03:33 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tinder`
--

-- --------------------------------------------------------

--
-- Table structure for table `history_viewed`
--

CREATE TABLE `history_viewed` (
  `id` int(11) NOT NULL,
  `id_viewer` int(11) NOT NULL,
  `id_watched` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `history_viewed`
--

INSERT INTO `history_viewed` (`id`, `id_viewer`, `id_watched`, `created_at`, `updated_at`) VALUES
(1, 1, 2, '2023-06-11 05:07:51', '2023-06-11 05:07:51'),
(2, 1, 3, '2023-06-11 05:07:51', '2023-06-11 05:07:51'),
(3, 1, 4, '2023-06-11 05:07:51', '2023-06-11 05:07:51'),
(4, 1, 5, '2023-06-11 05:07:51', '2023-06-11 05:07:51'),
(5, 1, 6, '2023-06-11 05:07:51', '2023-06-11 05:07:51'),
(6, 1, 7, '2023-06-11 05:07:51', '2023-06-11 05:07:51'),
(7, 1, 8, '2023-06-11 05:07:51', '2023-06-11 05:07:51'),
(8, 1, 9, '2023-06-11 05:07:51', '2023-06-11 05:07:51'),
(9, 1, 10, '2023-06-11 05:07:51', '2023-06-11 05:07:51'),
(10, 1, 11, '2023-06-11 05:07:51', '2023-06-11 05:07:51');

-- --------------------------------------------------------

--
-- Table structure for table `likes`
--

CREATE TABLE `likes` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_user_target` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `likes`
--

INSERT INTO `likes` (`id`, `id_user`, `id_user_target`, `created_at`, `updated_at`) VALUES
(1, 1, 2, '2023-06-11 03:34:30', '2023-06-11 03:34:30'),
(2, 1, 4, '2023-06-11 03:34:34', '2023-06-11 03:34:34'),
(3, 1, 3, '2023-06-11 03:34:42', '2023-06-11 03:34:42'),
(4, 1, 5, '2023-06-11 03:35:37', '2023-06-11 03:35:37'),
(5, 1, 6, '2023-06-11 03:35:40', '2023-06-11 03:35:40'),
(6, 1, 7, '2023-06-11 03:35:42', '2023-06-11 03:35:42'),
(7, 1, 8, '2023-06-11 03:35:54', '2023-06-11 03:35:54'),
(8, 1, 9, '2023-06-11 03:35:58', '2023-06-11 03:35:58'),
(9, 1, 10, '2023-06-11 03:36:01', '2023-06-11 03:36:01'),
(10, 1, 11, '2023-06-11 03:36:03', '2023-06-11 03:36:03'),
(11, 1, 12, '2023-06-10 03:36:36', '2023-06-11 03:36:36'),
(12, 1, 12, '2023-06-11 03:36:57', '2023-06-11 03:36:57');

-- --------------------------------------------------------

--
-- Table structure for table `passes`
--

CREATE TABLE `passes` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_user_target` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `passes`
--

INSERT INTO `passes` (`id`, `id_user`, `id_user_target`, `created_at`, `updated_at`) VALUES
(1, 1, 12, '2023-06-11 05:28:21', '2023-06-11 05:28:21');

-- --------------------------------------------------------

--
-- Table structure for table `premiums`
--

CREATE TABLE `premiums` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `type` enum('unlimited','verified') NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `age` int(3) NOT NULL,
  `gender` enum('male','female') NOT NULL,
  `profile` text DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `first_name`, `last_name`, `age`, `gender`, `profile`, `created_at`, `updated_at`) VALUES
(1, 'wramadan1203@gmail.com', '$2b$12$gjipJeIHGx5SzYAssCuaxuEF0.CbxnpvQHj7zV71RklPpw2NDsv3a', 'Wahyu', 'Ramadan', 23, 'male', 'static/images/profiles/1-Wahyu-Ramadan.png', '2023-06-09 12:25:13', '2023-06-09 12:25:13'),
(2, 'w@gmail.com', '$2b$12$kL/3KrU03qeWIup41dwDIuwfDs8vJ2Qsg5EHjjcHCQI1a8WMBEPeC', 'Wahyu', 'Ramadan', 23, 'male', NULL, '2023-06-09 14:36:58', '2023-06-09 14:36:58'),
(3, 'wr@gmail.com', '$2b$12$Kn8JKe94za7wFXyMdDJ2HeBiuv0..KPlIm4RKo6bzRO2P0dnELrsm', 'Wahyu', 'Ramadan', 23, 'male', NULL, '2023-06-09 14:37:40', '2023-06-09 14:37:40'),
(4, 'deva@gmail.com', '$2b$12$TsQTQfdpjqPNJ1glnLGYgeZ6Lx2LRX2y5CQE5pdwbf.rMEdyI0mhG', 'Zhakia', 'Deva Aldyansyah', 22, 'female', NULL, '2023-06-09 16:47:13', '2023-06-09 16:47:13'),
(5, 'devi@gmail.com', '$2b$12$tdEwCOdwpetW2Q7wzCfEWenQcMsCWaemAh7ymmU9JeATt8dx0GLVe', 'Devina', 'Dafonzo Ayuningtyas', 22, 'female', NULL, '2023-06-09 16:47:43', '2023-06-09 16:47:43'),
(6, 'lala@gmail.com', '$2b$12$sQUC3Mm1uD8gtV3UGR/LBeS3DpBvXUOEwPZVMH0ExIh9ROMKNfd8m', 'Lala', 'Sentono', 22, 'female', NULL, '2023-06-09 16:48:04', '2023-06-09 16:48:04'),
(7, 'nigsih@gmail.com', '$2b$12$RfgVwD2Xq3eFqDV2vAF04eP4OHb1lbQ./IvX0aomfd6pm027TUWgy', 'Ningsih', 'Alya', 22, 'female', NULL, '2023-06-09 16:48:36', '2023-06-09 16:48:36'),
(8, 'lely@gmail.com', '$2b$12$1tpY2/4MIyav7fs5O/9Oq.q4vM6belXBJLy/futmLPpLaNV.kVD4S', 'Lely', 'Pratiwi', 22, 'female', NULL, '2023-06-09 16:49:12', '2023-06-09 16:49:12'),
(9, 'retno@gmail.com', '$2b$12$.uwuQWlmzVvSn..oEE702eiF.quQYdXKBZjiIQTEGUI5qN23CNBei', 'Retno', 'Dwi Ningtyas', 22, 'female', NULL, '2023-06-09 16:49:25', '2023-06-09 16:49:25'),
(10, 'mahalini@gmail.com', '$2b$12$aUgrznLHkVHHiD61dWqNrunEMu5TlijMMHyaUHBtoyXIWgjp7AOnS', 'Mahalini', 'Andini', 22, 'female', NULL, '2023-06-09 16:49:51', '2023-06-09 16:49:51'),
(11, 'nila@gmail.com', '$2b$12$PZ2c9vzFvEn0uZ3ptGw9Guv5EJi8cpRzbHD73sinCZhW4DXJnuh7i', 'Nila', 'Wati', 22, 'female', NULL, '2023-06-09 16:50:33', '2023-06-09 16:50:33'),
(12, 'leny@gmail.com', '$2b$12$EumdwrVZh9b8E2QY9xUEC.WYeMLZfIe/GVgnN0HLYNjVvc4buIFlm', 'Leny', 'Suharjo', 22, 'female', NULL, '2023-06-10 09:26:26', '2023-06-10 09:26:26'),
(13, 'geby@gmail.com', '$2b$12$yXfIvObfsOBMGwFflMTQXu3bw0uQEJUIWOe2Bu0onbIFNJgCbaXcq', 'Geby', 'Kumalasari', 22, 'female', NULL, '2023-06-10 09:27:25', '2023-06-10 09:27:25'),
(14, 'indah@gmail.com', '$2b$12$7NkBx3Z0ZCIyepjsQsUI3ePeNL/W7N5pQFAoUKojtiqbcdfBR4zqa', 'Indah', 'Septiana Permatasari', 22, 'female', NULL, '2023-06-11 04:01:45', '2023-06-11 04:01:45'),
(15, 'putri@gmail.com', '$2b$12$9t..qwf7rRI7CReU.OWAme.2E1VwPxocVIDUhNiDsPScRnTL3fZ56', 'Adinda', 'Sinara Putri', 22, 'female', NULL, '2023-06-11 04:02:50', '2023-06-11 04:02:50'),
(16, 'shinta@gmail.com', '$2b$12$JuCQ3wEp9KxmYR05oUSFWOOBffT4oVLZAlbLxDMPxVrfK2uZnO9Im', 'Shinta', 'Wulandari', 22, 'female', NULL, '2023-06-11 04:04:21', '2023-06-11 04:04:21'),
(17, 'zamila@gmail.com', '$2b$12$LCuqP7xTF4XeE5bMDsX3N.MOVVgesB26w09QfBatBxJDkSdTP2G6a', 'Zamila', 'Wulandari', 22, 'female', NULL, '2023-06-11 04:05:00', '2023-06-11 04:05:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `history_viewed`
--
ALTER TABLE `history_viewed`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_viewer` (`id_viewer`),
  ADD KEY `id_watched` (`id_watched`);

--
-- Indexes for table `likes`
--
ALTER TABLE `likes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_user_target` (`id_user_target`);

--
-- Indexes for table `passes`
--
ALTER TABLE `passes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_user_target` (`id_user_target`);

--
-- Indexes for table `premiums`
--
ALTER TABLE `premiums`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `history_viewed`
--
ALTER TABLE `history_viewed`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `likes`
--
ALTER TABLE `likes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `passes`
--
ALTER TABLE `passes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `premiums`
--
ALTER TABLE `premiums`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
