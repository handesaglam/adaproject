-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Anamakine: 127.0.0.1
-- Üretim Zamanı: 30 Eki 2022, 18:05:58
-- Sunucu sürümü: 10.4.25-MariaDB
-- PHP Sürümü: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `ada`
--

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `rezerve`
--

CREATE TABLE `rezerve` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `persons` int(11) NOT NULL,
  `vago_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Tablo döküm verisi `rezerve`
--

INSERT INTO `rezerve` (`id`, `name`, `persons`, `vago_name`) VALUES
(1, 'hande', 2, 'ankara '),
(2, 'hande', 2, 'ankara ');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `train`
--

CREATE TABLE `train` (
  `id` int(11) NOT NULL,
  `train_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Tablo döküm verisi `train`
--

INSERT INTO `train` (`id`, `train_name`) VALUES
(0, 'Ankara treni'),
(1, 'istanbul treni'),
(2, 'izmir treni'),
(3, 'elaziz treni'),
(5, 'vagon');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `vagon`
--

CREATE TABLE `vagon` (
  `id` int(11) NOT NULL,
  `train_id` int(11) NOT NULL,
  `capasite` int(11) NOT NULL,
  `seating` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Tablo döküm verisi `vagon`
--

INSERT INTO `vagon` (`id`, `train_id`, `capasite`, `seating`) VALUES
(1, 1, 20, 5),
(2, 1, 30, 30);

--
-- Dökümü yapılmış tablolar için indeksler
--

--
-- Tablo için indeksler `rezerve`
--
ALTER TABLE `rezerve`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `train`
--
ALTER TABLE `train`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `vagon`
--
ALTER TABLE `vagon`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
